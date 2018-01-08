open Project;

type status =
  | None
  | LoadingIndex
  | CreatingProject(string);

type state = {
  status,
  index: Project.Index.t,
  newProject: string
};

type action =
  | IndexLoaded(Project.Index.t)
  | ChangeNewProject(string)
  | AddProject
  | ProjectCreated(Project.Index.t);

let component = ReasonReact.reducerComponent("Projects");

let changeNewProject = event =>
  ChangeNewProject(
    ReactDOMRe.domElementToObj(ReactEventRe.Form.target(event))##value
  );

let make = (~session, _children) => {
  ...component,
  initialState: () => {newProject: "", status: LoadingIndex, index: []},
  didMount: _self =>
    ReasonReact.SideEffects(
      ({reduce}) =>
        Js.Promise.(
          Project.Index.load()
          |> then_(index => reduce(() => IndexLoaded(index), ()) |> resolve)
        )
        |> ignore
    ),
  reducer: (action, state) =>
    switch action {
    | IndexLoaded(index) => ReasonReact.Update({...state, status: None, index})
    | ProjectCreated(index) =>
      ReasonReact.Update({...state, status: None, index})
    | ChangeNewProject(text) =>
      ReasonReact.Update({...state, newProject: text})
    | AddProject =>
      switch (String.trim(state.newProject)) {
      | "" => ReasonReact.NoUpdate
      | nonEmptyValue =>
        ReasonReact.UpdateWithSideEffects(
          {...state, status: CreatingProject(nonEmptyValue), newProject: ""},
          (
            ({reduce}) =>
              Project.createProject(session, nonEmptyValue)
              |> Js.Promise.(
                   then_(((_project, newIndex)) =>
                     reduce(() => ProjectCreated(newIndex), ()) |> resolve
                   )
                 )
              |> ignore
          )
        )
      }
    },
  render: ({reduce, state}) => {
    let projectList =
      ReasonReact.arrayToElement(
        Array.of_list(
          Project.Index.(
            switch state.status {
            | LoadingIndex => []
            | CreatingProject(newProject) => [
                (newProject, "new"),
                ...state.index |> List.map(({name, id}) => (name, id))
              ]
            | None => state.index |> List.map(({name, id}) => (name, id))
            }
          )
          |> List.map(((name, id)) =>
               <ul key=id> (ReasonReact.stringToElement(name)) </ul>
             )
        )
      );
    let status =
      switch state.status {
      | LoadingIndex => ReasonReact.stringToElement("Loading Index")
      | CreatingProject(newProject) =>
        ReasonReact.stringToElement("Creating project '" ++ newProject ++ "'")
      | None => ReasonReact.stringToElement("projects:")
      };
    <div>
      <h2> status </h2>
      projectList
      <input
        placeholder="Create new Project"
        value=state.newProject
        onChange=(reduce(changeNewProject))
        autoFocus=Js.true_
      />
      <button onClick=(reduce((_) => AddProject))>
        (ReasonReact.stringToElement("Add"))
      </button>
    </div>;
  }
};

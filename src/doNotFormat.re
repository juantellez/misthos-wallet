let andThenGetEvent = (watcher: option(Watcher.t)) => watcher |> Js.Option.andThen([@bs] (w => w#resultingEvent()));
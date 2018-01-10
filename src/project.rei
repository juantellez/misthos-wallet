module Index: {
  type item = {
    id: string,
    name: string
  };
  type t = list(item);
  let load: unit => Js.Promise.t(t);
};

type pubKey = string;

type member = {
  blockstackId: string,
  pubKey
};

type candidate = {
  blockstackId: string,
  pubKey,
  approvedBy: list(string)
};

type state = {
  id: string,
  name: string,
  members: list((pubKey, member)),
  candidates: list((string, candidate))
};

type t;

let load: string => Js.Promise.t(t);

let create: (Session.data, string) => Js.Promise.t((t, Index.t));

let suggestCandidate: (Session.data, string, t) => Js.Promise.t(t);

let getId: t => string;

let getName: t => string;

let getMembers: t => list(member);

let getCandidates: t => list(candidate);

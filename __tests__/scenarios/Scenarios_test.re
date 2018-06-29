open Belt;

open Jest;
open Expect;

let () =
  Scenarios.run("three-person-payout", (_venture, newItems) =>
    test("Payout is finalized", () => {
      let lastEvent = (newItems |. Array.getExn(1)).event;
      expect(
        switch (lastEvent) {
        | Event.PayoutFinalized(_) => true
        | _ => false
        },
      )
      |> toEqual(true);
    })
  );
Scenarios.run(~skipIntegrity=true, "four-person-payout", (_venture, newItems) =>
  test("Payout is finalized", () => {
    let lastEvent = (newItems |. Array.getExn(1)).event;
    expect(
      switch (lastEvent) {
      | Event.PayoutFinalized(_) => true
      | _ => false
      },
    )
    |> toEqual(true);
  })
);

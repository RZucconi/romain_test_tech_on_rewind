import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import SingleVideoDisplay from "./SingleVideoDisplay";
import { VIDEO } from "../Components/Query";

const mocks = [
  {
    request: {
      query: VIDEO,
      variables: {
        id: "100cd810-9dc9-4346-bcfc-6382dfe99b9b",
      },
    },
    result: {
      data: {
        video: {
          name: "Martine à la plage",
          url: "http://martine.com/picture/martinealaplage.png",
          Tag: {
            name: "Lecture jeunesse",
          },
        },
      },
    },
  },
];

it("renders without error", () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <SingleVideoDisplay id="100cd810-9dc9-4346-bcfc-6382dfe99b9b" />
    </MockedProvider>
  );

  const tree = component.toJson();
  expect(tree.children).toContain("Loading...");
});

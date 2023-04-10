import renderer from "react-test-renderer";
import ThirdLessonApp from "../../components/thirdLessonApp";

it("renders ThirdLessonApp correctly", () => {
  const tree = renderer.create(<ThirdLessonApp />).toJSON();
  expect(tree).toMatchSnapshot();
});

import renderer from "react-test-renderer";
import FourthLessonApp from "../../components/fourthLessonApp";

it("renders FourthLessonApp correctly", () => {
  const tree = renderer.create(<FourthLessonApp />).toJSON();
  expect(tree).toMatchSnapshot();
});

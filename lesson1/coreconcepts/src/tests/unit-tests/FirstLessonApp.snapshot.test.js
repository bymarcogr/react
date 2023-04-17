import renderer from 'react-test-renderer';
import FirstLessonApp from '../../components/firstLessonApp';

it('renders correctly', () => {
    const tree = renderer
      .create(<FirstLessonApp />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
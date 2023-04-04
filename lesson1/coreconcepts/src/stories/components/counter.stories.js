import Counter from "../../components/counter";

export default{
    title: 'Counter',
    component: Counter
}

export const Original = () => <Counter number={1}></Counter>

export const Secondary = () => <Counter number={1} buttonClassName={'netflixSearch'}></Counter>
import { useState } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = option => {
    switch (option) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
    
      default:
        return;
    }
  };

  const countTotalFeedback=()=>{
    return [good, neutral, bad].reduce((acc, value) => acc + value);
  }
  
  function countPositiveFeedbackPercentage () {
    const percentage = Math.round((good / value) * 100);
    
    if (!percentage) return 0;
    return percentage;
  }
  const value = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage();
  
  const stateName = ['good', 'neutral', 'bad'];

  return (
      <div className="App">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={stateName}
            onLeaveFeedback={handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {value === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={value}
              positivePercentage={percent}
            />
          )}
        </Section>
      </div>
    );
}

// === class ===
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrement = option => {
//     this.setState(prevState => {
//       return { [option]: prevState[option] + 1 };
//     });
//   };

//   countTotalFeedback() {
//     const totalValue = Object.values(this.state);
//     return totalValue.reduce((acc, value) => acc + value);
//   }

//   countPositiveFeedbackPercentage() {
//     const value = this.countTotalFeedback();
//     const percentage = Math.round((this.state.good / value) * 100);

//     if (!percentage) return 0;
//     return percentage;
//   }

//   render() {
//     const stateName = Object.keys(this.state);
//     const { good, neutral, bad } = this.state;
//     const value = this.countTotalFeedback();
//     const percent = this.countPositiveFeedbackPercentage();

//     return (
//       <div className="App">
//         <Section title={"Please leave feedback"}>
//           <FeedbackOptions
//             options={stateName}
//             onLeaveFeedback={this.handleIncrement}
//           />
//         </Section>
//         <Section title="Statistics">
//           {value === 0 ? (
//             <Notification message="No feedback given" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={value}
//               positivePercentage={percent}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

export default App;
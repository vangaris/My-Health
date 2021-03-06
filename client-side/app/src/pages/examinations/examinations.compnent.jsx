import React from "react";
import "./examinations.style.scss";
import {
  updateExamination,
  deleteExamination,
  getExaminations,
} from "../../database/utils";

import CustomButton from "../../components/custom-button/custom-button.component";
import ExaminationCard from "../../components/examinations-card/examinations-card.component";

class Examinations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      examinations: [],
      isLoading: true,
      completed: false,
      nonCompleted: false,
      status: false,
    };
  }

  geturrentUser = async () => {
    const userExaminations = await getExaminations();

    if (userExaminations) {
      this.setState({
        examinations: userExaminations,
        isLoading: false,
      });
    }
  };

  handleExaminationFilter = () => {
    this.setState({
      completed: !this.state.completed,
    });
  };

  showingCompletedExaminations = (event) => {
    const { value } = event.target;

    this.setState({ completed: !this.state.completed });
    console.log(value);
  };

  showingNonCompletedExaminations = (event) => {
    const { value } = event.target;

    this.setState({ nonCompleted: !this.state.nonCompleted });
    console.log(value);
  };

  handleStatus = async (id) => {
    this.state.examinations.forEach(async (exam) => {
      if (exam._id === id) {
        await updateExamination(!exam.completed, id);
        this.setState({
          status: !this.state.status,
        });
      }
    });
  };

  handleDelete = async (id) => {
    this.state.examinations.forEach((exam) => {
      if (exam._id === id) {
        deleteExamination(id);
        this.setState({
          status: !this.state.status,
        });
      }
    });
  };

  componentDidMount() {
    this.geturrentUser();
  }

  render() {
    const { completed, examinations, isLoading } = this.state;
    if (this.props.currentUser === null) {
      return <h5>Loading ...</h5>;
    }

    return (
      <>
        <input
          type="checkbox"
          onChange={this.showingCompletedExaminations}
          name="completed"
          value={this.state.completed}
        />
        <label> Ολοκληρωμένες</label>
        <input
          type="checkbox"
          onChange={this.showingNonCompletedExaminations}
          name="uncompleted"
          value={this.state.nonCompleted}
        />{" "}
        <label> μη Ολοκληρωμένες</label>
        <div className="examinations">
          {completed
            ? examinations
                .filter(({ completed }) => completed)
                .map(({ _id, ...examinationsProps }, index) => {
                  return (
                    <ExaminationCard
                      key={index}
                      handleDelete={this.handleDelete}
                      handleStatus={this.handleStatus}
                      {...examinationsProps}
                      id={_id}
                      isLoading={isLoading}
                    />
                  );
                })
            : examinations
                .filter((item) => !item.completed)
                .map(({ _id, ...examinationsProps }, index) => {
                  return (
                    <ExaminationCard
                      key={index}
                      handleDelete={this.handleDelete}
                      handleStatus={this.handleStatus}
                      {...examinationsProps}
                      id={_id}
                      isLoading={isLoading}
                    />
                  );
                })}
        </div>
      </>
    );
  }
}
export default Examinations;

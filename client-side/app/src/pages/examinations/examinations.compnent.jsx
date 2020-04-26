import React from "react";
import { getExaminations } from "../../database/utils";
import "./examinations.style.scss";
import CustomButton from "../../components/custom-button/custom-button.component";
import { updateExamination, deleteExamination } from "../../database/utils";

class Examinations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      examinations: [{}],
      isLoading: true,
      completed: false,
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

    if (completed) {
      return (
        <div className="filter">
          <span> Ολοκληρωμένες Εξετάσεις </span>
          <CustomButton onClick={() => this.handleExaminationFilter()}>
            αλλαγη σε μη
          </CustomButton>
        </div>
      );
    } else {
      return (
        <div className="filter">
          <span> Μη Ολοκληρωμένες Εξετάσεις </span>{" "}
          <CustomButton onClick={() => this.handleExaminationFilter()}>
            Ολοκληρωμένες
          </CustomButton>
        </div>
      );
    }

    //   return (
    //     <div className="containerExaminations">
    //       {completed ? (
    //         <div className="filter">
    //           <span> Ολοκληρωμένες Εξετάσεις </span>
    //           <CustomButton onClick={() => this.handleExaminationFilter()}>
    //             αλλαγη σε μη
    //           </CustomButton>
    //         </div>
    //       ) : (

    //       )}
    //       <div className="examinations">
    //         {completed
    //           ? examinations
    //               .filter(({ completed }) => completed)
    //               .map(({ _id, ...examinationsProps }, index) => {
    //                 return (
    //                   <ExaminationCard
    //                     key={index}
    //                     handleDelete={this.handleDelete}
    //                     handleStatus={this.handleStatus}
    //                     {...examinationsProps}
    //                     id={_id}
    //                     isLoading={isLoading}
    //                   />
    //                 );
    //               })
    //           : examinations
    //               .filter((item) => !item.completed)
    //               .map(({ _id, ...examinationsProps }, index) => {
    //                 return (
    //                   <ExaminationCard
    //                     key={index}
    //                     handleDelete={this.handleDelete}
    //                     handleStatus={this.handleStatus}
    //                     {...examinationsProps}
    //                     id={_id}
    //                     isLoading={isLoading}
    //                   />
    //                 );
    //               })}
    //       </div>
    //     </div>
    //   );
  }
}
export default Examinations;

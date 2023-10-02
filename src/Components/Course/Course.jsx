const Course = ({ item, idx }) => {
  const { course_name } = item;
  return (
    <div>
      <h2 className=" text-[#1C1B1B99]">
        {idx + 1}. {course_name}
      </h2>
    </div>
  );
};

export default Course;

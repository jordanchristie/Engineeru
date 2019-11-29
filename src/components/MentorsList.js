import React from "react";

const MentorsList = ({ mentors }) => {
  console.log(mentors);
  // const renderMentors =
  return (
    <section className="mentors-list flex flex-wrap items-center justify-between overflow-x-hiddens">
      {mentors.map(mentor => {
        return (
          <article className="mentor flex-1 w-5/12 m-4" key={mentor.id}>
            <img src="https://source.unsplash.com/random/200x200" alt="dummy" />
            <div className="text-center">
              <h3 className="font-bold">@{mentor.username}</h3>
              <p>{mentor.name}</p>
              <p className="italic">{mentor.website}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default MentorsList;

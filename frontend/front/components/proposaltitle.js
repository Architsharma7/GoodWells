import React from "react";
const ProposalTitle = ({ proposalForm, setProposalForm }) => {
  return (
    <div className="flex flex-col">
      <p className="text-black lg:text-6xl text-4xl mt-7 4xl:text-8xl">
        Let's take your first step towards saving Earth 🌍
      </p>
      <p className="text-black lg:text-3xl text-2xl mt-10 4xl:text-6xl 4xl:mt-20">
        Tell people the cause you need help for.
      </p>
      <input
        className="mt-6 4xl:mt-12 lg:px-5 px-2 flex w-full lg:py-2 py-1 4xl:py-4 mx-auto lg:text-2xl text-lg 4xl:text-4xl border-blue-500 border rounded-xl"
        type="text"
        placeholder="Write the cause here"
        value={proposalForm.title}
        onChange={(event) => {
          setProposalForm({ ...proposalForm, title: event.target.value });
        }}
      ></input>
      <p className="text-black lg:text-3xl text-2xl mt-10 4xl:text-6xl 4xl:mt-20">
        Select a CAUSE
      </p>
      <select
        value={proposalForm.type}
        onChange={(event) => {
          setProposalForm({ ...proposalForm, type: event.target.value });
        }}
        className="mt-6 mb-5 px-5 py-2 text-xl border border-black rounded-xl"
      >
        <option value="Environmental Conservation">Environmental Conservation</option>
        <option value="Animal conservation">Animal conservation</option>
        <option value="Marine Conservation">Marine Conservation</option>
        <option value="Human Conservation">Human Conservation</option>
      </select>
    </div>
  );
};

export default ProposalTitle;

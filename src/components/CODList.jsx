import { Link } from "react-router-dom";

const CODList = () => {
  const choirCodeOfConduct = [
    "Every member must be genuinely born again.",
    "The rehearsal starts by 4:00 PM on Saturday, and any member that comes after 4:15 PM will be considered late.",
    "Each choir member must have a choir note and must attend choir meetings with their Bible.",
    "Lateness to the rehearsal attracts any punishment deemed fit by the choir coordinator.",
    "A member that does not attend three consecutive rehearsals will be suspended.",
    "Members who do not attend the rehearsal will not officiate or wear the choir robe during the service.",
    "It is compulsory for members to attend the workers' meeting by 7:00 AM on Sunday.",
    "Members that come after 7:30 AM to the workers' meeting will not officiate and will sit in the front seat among the congregation.",
    "Members must take permission before traveling.",
    "Members must attend weekly services.",
    "All phones must be either switched off or put on vibration during choir rehearsal and church services.",
    "Members must comport themselves in a disciplined manner during rehearsal and church services.",
    "Members are free to raise suggestions and ideas towards the development of the department.",
    "All complaints must be directed to the coordinator.",
    "Duties assigned to any member must be fully carried out without complaints.",
    "Jewelries such as chains and beads are not allowed to be worn during ministration.",
    "The use of make-up during ministration must be avoided.",
    "Hairstyles such as fixing and braids must be well-packed under the beret/cap/hat.",
    "Members should have the required uniforms and should wear the uniform for specified ministrations.",
    "Only black and covered shoes must be worn. Slippers and sandals are not allowed.",
    "Men should not wear slim pencil trousers and should not sag.",
    "Members should not wear short sleeve shirts; if at all, they should wear a suit or jacket.",
    "Ladies should not wear slim skirts; skirts must not be cut at the back and must go beyond the knees.",
    "Men's haircuts should be moderate.",
    "A monthly contribution of N100 must be made by all members.",
    "Ungodly dressing should not be engaged in outside the church, e.g., trouser wearing by ladies and mini-skirts.",
    "Members should not engage in couples' lifestyle unless they are married.",
    "Members in any relationship must make it known to the coordinator.",
  ];

  return (
    <section className=" flex justify-center">
      <div className=" px-3 max-w-[500px] ">
        <h2 className="mb-3 text-sm font-semibold text-gray-900 ">
          Below is the Code of Conduct that every member of the choir at RCCG
          Unchangeable God Parish is expected to follow. Please take the time to
          read through it carefully. If you have any questions, concerns, or
          objections, kindly discuss them with the Choir Coordinator. Once you
          have reviewed the Code of Conduct and are ready to adhere to the
          rules, please proceed to fill out the membership form.
        </h2>

        <ol className="ps-1 mt-2 text-gray-700 space-y-1 list-decimal list-inside">
          {choirCodeOfConduct.map((rules, i) => {
            return <li key={i}> {rules} </li>;
          })}
        </ol>
        <Link to="/membershipform">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-4 mb-6 "
          >
            Fill Membership Form
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CODList;

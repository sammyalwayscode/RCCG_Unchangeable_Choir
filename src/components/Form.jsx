const Form = () => {
  return (
    <div>
      <section>
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Fill the Form Below
        </h2>
      </section>
      <section className=" flex justify-center">
        <iframe
          className="max-w-full"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfHJ5DLIRayhswqKvg_SLe2VrBtUPMXtgDKMd2LBIbSkyLJoA/viewform?embedded=true"
          width="640"
          height="2316"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </section>
    </div>
  );
};

export default Form;

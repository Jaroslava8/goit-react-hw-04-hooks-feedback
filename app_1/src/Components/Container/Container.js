import propTypes from "prop-types";

export default function Container({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}

Container.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.element.isRequired,
};

/* eslint-disable react/prop-types */
function SkillIcon({ children, src, alt }) {
  return (
    <div className="hover:shadow-md hover:scale-110 duration-500">
      <img className="w-20 mx-auto" src={src} alt={alt} />
      <p className="my-4">{children}</p>
    </div>
  );
}

export default SkillIcon;

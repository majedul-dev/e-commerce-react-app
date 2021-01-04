const data = [
  {
    id: 1,
    icon: <i class='fab fa-facebook-f'></i>,
    url: "https://web.facebook.com/majedul956",
  },
  {
    id: 2,
    icon: <i class='fab fa-linkedin-in'></i>,
    url: "https://www.linkedin.com/in/majedul-dev",
  },
  {
    id: 5,
    icon: <i class='fab fa-twitter'></i>,
    url: "https://twitter.com/mazedul_dev",
  },
  {
    id: 3,
    icon: <i class='fab fa-google-plus-g'></i>,
    url: "https://github.com/majedul-dev",
  },
  {
    id: 3,
    icon: <i class='fab fa-dribbble'></i>,
    url: "https://github.com/majedul-dev",
  },
];
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a href={link.url} target='blank' className='social-link'>
        {link.icon}
      </a>
    </li>
  );
});

const socialLinks = ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  );
};

export default socialLinks;

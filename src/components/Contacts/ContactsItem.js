const ContactItem = ({href, caption, i_type}) => {
  return (
    <div>
      <a href={href} target="_blank" rel="noreferrer">
        <i className={i_type}></i>
        {caption}
      </a>
    </div>
  );
};

export default ContactItem;

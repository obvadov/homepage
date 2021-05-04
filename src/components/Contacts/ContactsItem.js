const ContactItem = ({href, caption, i_type}) => {
  return (
    <div>
      <a href={href} target="_blank">
        <i className={i_type}></i>
        {caption}
      </a>
    </div>
  );
};

export default ContactItem;

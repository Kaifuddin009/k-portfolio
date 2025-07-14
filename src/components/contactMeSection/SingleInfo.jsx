const SingleInfo = ({text,Icon,className,iconClass,href}) => {
  return (
    <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex gap-4 items-center justify-start ${className}`}
    >
    <Icon className={`text-3xl ${iconClass}`}/>
    <p >{text}</p>
    </a>
  )
}
export default SingleInfo
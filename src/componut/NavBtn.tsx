
export default function NavBtn({label,className,href}:{
  label:string,
  className:string,
  href:string
} ) {
    return (
    <button    className={`${className}`}>
<a  href={`${href}`}>
    {label}
</a>
    </button>
  )
}

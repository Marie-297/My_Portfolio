const Container = ({ children }:{
  children: React.ReactNode
}) => {
return ( 
  <div
    className="
      max-w-[2520px]
      mx-auto
      md:px-0
      sm:px-0
      px-52
    "
  >
    {children}
  </div>
 );
}

export default Container;
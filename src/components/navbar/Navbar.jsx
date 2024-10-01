import HeadInfos from "./HeadInfos";

const Navbar = () => {
  //   return (
  //     <div className="">
  //       <HeadInfos />
  //       <div className="sticky top-0 bg-white z-50">
  //         <div className="flex items-center justify-between gap-3 max-w-6xl mx-auto py-5 px-2 border  ">
  //           {/* logo */}
  //           <div>
  //             <img
  //               src="/images/logo.png"
  //               alt="logo"
  //               width={100} // Set width
  //               height={100} // Set height
  //             />
  //           </div>

  //           {/* nav items */}
  //           <div className="">as</div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (

      
      <div className="sticky top-0 bg-white z-50">
        <div className="flex items-center justify-between gap-3  border px-2 pb-5">
          {/* Logo */}
          <div>
            <img src="/images/logo.png" alt="logo" width={100} height={100} />
          </div>

          {/* Nav items */}
          <div className="">as</div>
        </div>
      </div>

  );
};



export default Navbar;

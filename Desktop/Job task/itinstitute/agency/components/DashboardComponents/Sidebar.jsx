"use client";
import { FiHome } from "react-icons/fi";
import { MdGroups2 } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";
import { GrFormNext } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase.config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Sidebar = ({ setToggle, toggle }) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth).then(() => {
      return router.push("/");
    });
  };
  return (
    <div className="p-4 bg-white w-full z-30 shadow-md h-screen sticky top-0 left-0">
      <div className="relative h-full">
        <Link href="/" className="text-xl font-semibold">
          It Institute
        </Link>

        <div className="mt-5 flex flex-col gap-3 text-black">
          <Link
            onClick={() => setToggle(!toggle)}
            href="/"
            className="flex items-center text-gray-500 hover:text-black p-2 hover:bg-gray-100 rounded-lg gap-2 text-base"
          >
            <p className="text-xl">
              <FiHome></FiHome>
            </p>
            <p className="font-medium ">Dashboard</p>
          </Link>
          <div className="flex relative transition-all items-center group text-gray-500  p-2 hover:bg-gray-100 rounded-lg gap-2 text-base">
            <div className="text-xl">
              <TfiGallery></TfiGallery>
            </div>
            <p className="font-medium hover:text-black transition-colors">
              Portfolio Item
            </p>
            <div className="text-xl text-gray-500">
              <GrFormNext></GrFormNext>
            </div>
            <div className="absolute top-5 z-30 left-10 scale-0 flex-col transition-transform duration-300  bg-white p-2 rounded-md shadow-lg gap-2 group-hover:scale-100 flex py-4">
              <Link
                onClick={() => setToggle(!toggle)}
                href="/"
                className="hover:bg-gray-100  p-2 rounded-md hover:text-black transition-colors"
              >
                Manage Item
              </Link>
              <Link
                onClick={() => setToggle(!toggle)}
                href="/dashboard/add-portfolio"
                className="hover:bg-gray-100 transition-colors p-2 rounded-md hover:text-black"
              >
                Add Item
              </Link>
            </div>
          </div>{" "}
          <div className="flex relative transition-all items-center group text-gray-500  p-2 hover:bg-gray-100 rounded-lg gap-2 text-base">
            <div className="text-xl">
              <VscFeedback></VscFeedback>
            </div>
            <p className="font-medium hover:text-black transition-colors">
              Testimonial
            </p>
            <div className="text-xl text-gray-500">
              <GrFormNext></GrFormNext>
            </div>
            <div className="absolute top-5 z-30 left-10 scale-0 flex-col transition-transform duration-300  bg-white p-2 rounded-md shadow-lg gap-2 group-hover:scale-100 flex py-4">
              <Link
                onClick={() => setToggle(!toggle)}
                href="/manage-testimonials"
                className="hover:bg-gray-100  p-2 rounded-md hover:text-black transition-colors"
              >
                Manage Testimonials
              </Link>
              <Link
                onClick={() => setToggle(!toggle)}
                href="/dashboard/add-testimonial"
                className="hover:bg-gray-100 transition-colors p-2 rounded-md hover:text-black"
              >
                Add Testimonial
              </Link>
            </div>
          </div>
          {/* <Link
            href="/"
            className="flex relative transition-all items-center group text-gray-500  p-2 hover:bg-gray-100 rounded-lg gap-2 text-base"
          >
            <div className="text-xl">
              <MdGroups2></MdGroups2>
            </div>
            <p className="font-medium hover:text-black transition-colors">
              Team Members
            </p>
            <div className="text-xl text-gray-500">
              <GrFormNext></GrFormNext>
            </div>
            <div className="absolute top-5 left-10 scale-0 flex-col transition-transform duration-300  bg-white p-2 rounded-md shadow-lg gap-2 group-hover:scale-100 flex py-4">
              <Link
                href="/"
                className="hover:bg-gray-100  p-2 rounded-md hover:text-black transition-colors"
              >
                Manage Members
              </Link>
              <Link
                href="/"
                className="hover:bg-gray-100 transition-colors p-2 rounded-md hover:text-black"
              >
                Add Member
              </Link>
            </div>
          </Link> */}
          <Link
            onClick={() => setToggle(!toggle)}
            href="/dashboard/add-company"
            className="flex items-center text-gray-500 hover:text-black p-2 hover:bg-gray-100 rounded-lg gap-2 text-base"
          >
            <p className="text-xl">
              <FiHome></FiHome>
            </p>
            <p className="font-medium ">Company</p>
          </Link>{" "}
          <Link
            onClick={() => setToggle(!toggle)}
            href="/dashboard/hero"
            className="flex items-center text-gray-500 hover:text-black p-2 hover:bg-gray-100 rounded-lg gap-2 text-base"
          >
            <p className="text-xl">
              <FiHome></FiHome>
            </p>
            <p className="font-medium ">Hero</p>
          </Link>
        </div>
        <div className="absolute bottom-0 w-full">
          <button
            onClick={handleLogout}
            className="w-full py-3 bg-primary font-semibold text-white rounded-full"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

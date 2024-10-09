import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import CarouselSection from "./CarouselSection";
import Footer from "./footer";
import { Search } from "lucide-react";

function App() {
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();
  const [loadingCards, setLoadingCards] = useState(true);
  const [page1, setPage1] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    toast.success("Test toast");
  }, []);

  useEffect(() => {
    handleLoadOnce();
    axios
      .get("https://ghost-games-dbup.vercel.app/api/filter")
      .then((response) => {
        setPage1(response?.data);
        setLoadingCards(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLoadOnce = () => {
    const hasLoadedBefore = localStorage.getItem("hasLoadedOnce");

    if (!hasLoadedBefore) {
      setTimeout(() => {
        setLoad(false);
        localStorage.setItem("hasLoadedOnce", true);
      }, 4000);
    } else {
      setLoad(false);
    }
  };

  const filteredItems = page1.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [mainUser, setMainUser] = useState("");
  const [istrue, setIsTrue] = useState(true);
  const [ist, setist] = useState(true);

  useEffect(() => {
    console.log("Starting request to /profile");
    const token = localStorage.getItem("authToken");

    if (!token) {
      console.log("No token found, user not logged in");
      setIsTrue(true);
      return;
    }

    axios
      .get("https://ghost-games-dbup.vercel.app/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((response) => {
        const dataUser = response?.data?.user || "";
        console.log("Response received:", response.data);
        console.log("Extracted user from response:", dataUser);

        toast.success(response.data.message);

        setMainUser(dataUser);
        console.log("User set in state:", dataUser);

        if (dataUser !== "") {
          setIsTrue(false);
          console.log("User is logged in, isTrue set to false");
        } else {
          setIsTrue(true);
          console.log("No user found, isTrue set to true");
        }
      })
      .catch((error) => {
        console.error("Error retrieving user data:", error); // Log any errors
        toast.error("Error retrieving user data. Please try again.");
        setIsTrue(true);
      });
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://ghost-games-dbup.vercel.app/logout",
        {},
        { withCredentials: true }
      );

      localStorage.removeItem("authToken");
      toast.success("Logout successful");
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Error logging out. Please try again.");
    }
  };
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    2000: {
      items: 10,
    },
    1492: {
      items: 4,
    },
    1200: {
      items: 3,
    },
    880: {
      items: 2,
    },
    0: {
      items: 1,
    },
  };

  return load === true ? (
    <div className="w-full h-[100vh] bg-black overflow-hidden bg-center">
      <video
        className="w-full h-full  bg-cover object-fill flex bg-center absolute"
        muted
        autoPlay
        src="https://static.moewalls.com/videos/preview/2023/ghost-call-of-duty-modern-warfare-ii-preview.mp4#t=2,10"
      ></video>
      <FontAwesomeIcon
        icon={faSpinner}
        spin
        spinReverse
        size="2xl"
        className="left-[49%] top-[48%]"
        style={{
          color: "#fff",
          position: "relative",
          height: "50px",
          width: " 50px",
        }}
      />
    </div>
  ) : (
    <div className="h-[4860px] w-full bg-[#2e1351]  scroll-smooth ">
      <div className="relative  backdrop-opacity-10 z-30 bg-[#171d25] h-20 w-full flex border-b-2 border-b-black ">
        <div className="w-24 h-full pl-32 float-left justify-center items-center  flex ">
          <a
            href="#"
            className="text-5xl  xl:text-6xl float-left  tracking-widest font-bold font-sans subpixel-antialiased text-cyan-300"
          >
            {" "}
            Ghost{" "}
          </a>
        </div>
        <div className=" flex float-none h-full w-full ">
          <div className=" h-full  justify-center  items-center  pr-7 ml-auto flex ">
            <a
              href="#shooting"
              className=" text-xl hover:underline hover:text-[#46f3cb] font-bold text-[#9bffe8]"
            >
              SHOOTING
            </a>
          </div>
          <div className="w-24 h-full  justify-center items-center pr-7 flex ">
            <a
              href="#card"
              className=" text-xl hover:underline hover:text-[#46f3cb] font-bold text-[#9bffe8]"
            >
              CARD
            </a>
          </div>
          <div className=" h-full  justify-center items-center pr-7 flex ">
            <a
              href="#sports"
              className=" text-xl  hover:underline hover:text-[#46f3cb] font-bold text-[#9bffe8]"
            >
              SPORTS
            </a>
          </div>
          <div className=" h-full  justify-center items-center pr-7 flex  mr-auto ">
            <a
              href="#Battle"
              className=" text-xl hover:underline hover:text-[#46f3cb] font-bold text-[#9bffe8]"
            >
              BATTLE ROYALE
            </a>
          </div>
        </div>
        {istrue === false ? (
          <div>
            {ist ? (
              <div
                onClick={() => setist(false)}
                className="w-max z-50 p-2 px-4 m-2 mr-8 justify-center items-center  rounded-lg mb-4 flex flex-col"
              >
                <img
                  loading="lazy"
                  className="h-12 w-12 cursor-pointer mb-2 bg-cover rounded-full border-2 border-white brightness-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWz-elAmN-LwWwHnJmwXYLs9PPQL7SGbdKrLBGxpCW8MSpjkan_TORzh2UlKQhqZqheA&usqp=CAU"
                  alt="User"
                />
              </div>
            ) : (
              <div className="float-right relative z-50 bg-[#222023c0] w-max p-2 px-4 mr-12 justify-center my-2 items-center rounded-lg mb-4 flex flex-col">
                <img
                  loading="lazy"
                  onClick={() => setist(true)}
                  className="h-12 cursor-pointer w-12 mb-2 bg-cover rounded-full border-2 border-white brightness-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWz-elAmN-LwWwHnJmwXYLs9PPQL7SGbdKrLBGxpCW8MSpjkan_TORzh2UlKQhqZqheA&usqp=CAU"
                  alt="User"
                />
                <div>
                  <h1 className="text-xs font-semibold text-yellow-200">
                    {mainUser}
                  </h1>
                </div>
                <div className="m-1.5  font-normal rounded-md border-black">
                  <button
                    onClick={handleLogout}
                    className="text-sm cursor-pointer z-60 text-white px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:bg-gradient-to-br hover:shadow-xl transition-all duration-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="w-full z-50  h-[100vh]">
        <div className="absolute z-20 w-full h-full bg-[rgba(0,0,0,.44)]"></div>
        <img
          loading="lazy"
          className="absolute z-10 object-fill w-full h-full"
          src="https://wallpapers.com/images/hd/3840-x-1080-gaming-8z2jwjo8i0zpjlxo.jpg"
          alt="bg img"
        />

        <div className="w-full h-[100vh] z-20 relative  px-28  pt-8 ">
          {istrue === true ? (
            <div className="h-auto w-auto flex float-right text-[#4fd2e3] text-xl justify-center items-center pb-8 ">
              <div className=" mr-5  px-1.5 font-semibold rounded-md border-2 border-cyan-300 #8c929d hover:bg-[rgba(120,120,120,0.2)]">
                <button
                  onClick={(x) => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
              </div>
              <div className=" mr-10 px-1.5 font-semibold border-2 rounded-md  border-cyan-300 #8c929d hover:bg-[rgba(120,120,120,0.2)] ">
                {" "}
                <button
                  onClick={(x) => {
                    navigate("/signup");
                  }}
                >
                  SignUp
                </button>{" "}
              </div>
            </div>
          ) : null}

          <div className="mb-20 h-11 justify-center flex w-full ">
            <div className="w-3/4  border-2 rounded-lg flex flex-row  items-center pl-3 bg-[rgba(120,120,120,0.5)] border-[#242424] h-full">
              <Search color="#8c929d" />
              <input
                onChange={handleSearchChange}
                className="h-full w-full text-white  bg-transparent placeholder:italic text-[whi] ml-2 pl-2 "
                placeholder="Search a game"
              ></input>
            </div>
          </div>

          {searchQuery !== "" && (
            <div className="">
              <CarouselSection
                title="SEARCH RESULTS"
                items={filteredItems}
                loading={loadingCards}
                handleDragStart={handleDragStart}
                responsive={responsive}
              />
            </div>
          )}

          <div className="">
            <CarouselSection
              title="POPULAR GAMES"
              items={page1.slice(0, 12)}
              loading={loadingCards}
              handleDragStart={handleDragStart}
              responsive={responsive}
            />
          </div>
          <div className="">
            <CarouselSection
              title="TRENDING GAMES"
              items={page1.slice(13, 24)}
              loading={loadingCards}
              handleDragStart={handleDragStart}
              responsive={responsive}
            />
          </div>
          <div className="">
            <CarouselSection
              title="GAMES YOU WILL LIKE"
              items={page1.slice(25, 36)}
              loading={loadingCards}
              handleDragStart={handleDragStart}
              responsive={responsive}
            />
          </div>
          <div className="">
            <CarouselSection
              title="TOP PC GAMES"
              items={page1.slice(100, 120)}
              loading={loadingCards}
              handleDragStart={handleDragStart}
              responsive={responsive}
            />
          </div>
          <div className="" id="shooting">
            <CarouselSection
              title="SHOOTING GAMES"
              items={page1
                .filter((data) => data.genre === "Shooter")
                .slice(0, 20)}
              loading={loadingCards}
              handleDragStart={handleDragStart}
              responsive={responsive}
            />
          </div>
          <div className="" id="card">
            <CarouselSection
              title="CARD GAMES"
              items={page1
                .filter((data) => data.genre === "Card Game")
                .slice(0, 15)}
              loading={loadingCards}
              handleDragStart={handleDragStart}
              responsive={responsive}
            />
          </div>
          <div className="" id="Battle">
            <CarouselSection
              title="BATTLE ROYALE"
              items={page1
                .filter((data) => data.genre === "Battle Royale")
                .slice(0, 19)}
              loading={loadingCards}
              handleDragStart={handleDragStart}
              responsive={responsive}
            />
          </div>
          <div className="" id="sports">
            <CarouselSection
              title="SPORTS"
              items={page1
                .filter((data) => data.genre === "Sports")
                .slice(0, 20)}
              loading={loadingCards}
              handleDragStart={handleDragStart}
              responsive={responsive}
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

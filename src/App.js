const App = () => {
  return (
    <div
      className="bg-slate-800 flex h-screen flex-col"
    >
      <h1
        className="text-white font-bold underline justify-center flex text-4xl mt-20 text-center opacity-70 tracking-wide"
      >
        Hello World
      </h1>
      <p
        className="text-white text-2xl mt-20 text-center w-100 md:w-70 lg:w-3/4 mx-auto opacity-70 p-4 
        "
      >
        The current application allows you to log in using your Google account.
        Once logged in, you can view a list of all the users and some of their
        details such as their names and the number of albums they have. You can
        also view the albums of each user and the photos in each album.
        Additionally, you can edit the title of an album.
      </p>
    </div>
  );
};

export default App;

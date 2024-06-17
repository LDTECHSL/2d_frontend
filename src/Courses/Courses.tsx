import { InputAdornment, TextField } from "@mui/material";
import "./courses.css";
import "react-slideshow-image/dist/styles.css";
import SearchIcon from "@mui/icons-material/Search";

const Courses = () => {
  const styles = {
    label: {
      color: "white",
    },
    input: {
      color: "white",
    },
  };

  return (
    <div className="course-outer">
      <div className="searchBar-outer">
        <TextField
          id="outlined-basic"
          variant="outlined"
          className="searchBar"
          label=""
          InputLabelProps={{
            style: styles.label,
          }}
          InputProps={{
            style: styles.input,
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon className="search_icon" />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // Set outline color to white
              },
              "&:hover fieldset": {
                borderColor: "white", // Set outline color to white on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "orange", // Set outline color to orange on focus
              },
            },
          }}
        />
      </div>
      <div className="ad_outer">
        <img className="ad1" src="" alt="" />
      </div>

      <div className="content-outer">
        <div className="content-inner1">
          <div className="course-inner"></div>
          <div className="course-inner"></div>
        </div>
        <div className="content-inner2">
          <div className="course-inner inner10"></div>
        </div>
      </div>
      
      <div className="content-outer">
        <div className="content-inner1">
          <div className="course-inner"></div>
          <div className="course-inner"></div>
        </div>
        <div className="content-inner2">
          <div className="course-inner inner10"></div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

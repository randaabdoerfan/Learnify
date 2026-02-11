import React, { useState } from "react";
import './Profile.css'; // Import CSS file for styling

export const Profile = () => {
  const [name, setName] = useState("Zainb Maged");
  const [profilePicture, setProfilePicture] = useState(null);
  const [interests, setInterests] = useState("Web Development, AI, Design");
  const [roadmaps, setRoadmaps] = useState(["Full Stack Web Developer", "Data Science"]);
  const [courses, setCourses] = useState([
    { title: "React Basics", progress: 60 },
    { title: "Machine Learning 101", progress: 30 },
  ]);
  const [videos, setVideos] = useState([
    { title: "JavaScript Introduction", progress: 80 },
    { title: "Introduction to Django", progress: 50 },
  ]);

  // Handle profile picture change
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle saving profile changes
  const handleSaveProfile = () => {
    console.log("Profile saved!");
  };

  // Update course or video progress
  const updateProgress = (type, index, change) => {
    if (type === "courses") {
      const updatedCourses = [...courses];
      const newProgress = Math.min(Math.max(updatedCourses[index].progress + change, 0), 100);
      updatedCourses[index].progress = newProgress;
      setCourses(updatedCourses);
    }
    if (type === "videos") {
      const updatedVideos = [...videos];
      const newProgress = Math.min(Math.max(updatedVideos[index].progress + change, 0), 100);
      updatedVideos[index].progress = newProgress;
      setVideos(updatedVideos);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-sidebar">
        <div className="profile-header">
          <div className="profile-picture">
            <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
            {profilePicture ? <img src={profilePicture} alt="Profile" /> : <div className="placeholder-picture">+</div>}
          </div>
          <h1>{name}</h1>
          <p className="bio">{interests}</p>
        </div>

        <div className="profile-sections">
          <div className="section">
            <h3>Saved Roadmaps</h3>
            <ul>
              {roadmaps.map((roadmap, index) => (
                <li key={index}>{roadmap}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="profile-main-content">
        <h2>Activity</h2>

        <div className="courses">
          <h3>Saved Courses</h3>
          {courses.map((course, index) => (
            <div key={index} className="item">
              <h4>{course.title}</h4>
              <progress value={course.progress} max="100"></progress>
              <span>{course.progress}%</span>
              <div className="progress-buttons">
                <button onClick={() => updateProgress("courses", index, 10)}>Increase Progress</button>
                <button onClick={() => updateProgress("courses", index, -10)}>Decrease Progress</button>
              </div>
            </div>
          ))}
        </div>

        <div className="videos">
          <h3>Saved Videos</h3>
          {videos.map((video, index) => (
            <div key={index} className="item">
              <h4>{video.title}</h4>
              <progress value={video.progress} max="100"></progress>
              <span>{video.progress}%</span>
              <div className="progress-buttons">
                <button onClick={() => updateProgress("videos", index, 10)}>Increase Progress</button>
                <button onClick={() => updateProgress("videos", index, -10)}>Decrease Progress</button>
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleSaveProfile} className="save-btn">Save Profile</button>
      </div>
    </div>
  );
};

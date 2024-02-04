
![IntelliBin](https://github.com/asyf16/IntelliBin/assets/144833617/e4462c99-c087-4af3-85c7-6b278d50a97d)
# 💡 IntelliBin 2.0 💯

Our new and improved IntelliBin can detect trash placed in front of its camera automatically through motion-sensing using OpenCV. It then takes a photo of the trash and identifies it using Google Cloud Vision API. Lastly, the servo-motor-controlled arm sorts the trash into either the recycling or trash can. 


# 📷 Video Demo 🎥
[https://www.youtube.com/watch?v=fziGIb2MTAk&t=7s](https://www.youtube.com/watch?v=NknvJ2T73nU&t=1s)


# 🌐 Website Updates 💻

Our IntelliBin website is now hosted at https://Intellibin.tech/! On our website, users can create an authenticated account using their email, or log in to existing accounts. They can then view their recycling statistics which are stored on the cloud using Google Firestore. After registering an account, users can generate a QR code on our website and connect their IntelliBin to their account. Every time they recycle a piece of trash, the user will gain coins that they can then use to buy custom avatars. The user's daily and total recycling count is also updated live! An updated leaderboard keeps track of and displays the statistics of all users to drive some friendly competition. Users can also reset their password on our website.


# 🛠️ Hardware Updates 💬
Hardware Base: We built a new hardware container that beautifies and containerizes our project. Users can simply place our IntelliBin system on top of existing trashcans to turn any boring trashcan into an exciting recycling robot!

Connected Webcam: Our IntelliBin now works 100% automatically. When an object is placed in front of our integrated webcam, motion-sensing is completed using OpenCV. If motion is detected, the webcam will take a picture of the trash in front of it and identify the object using Google Cloud's Vision API. Depending on the type of object, our robot arm will turn at 180 degrees to sort the trash into one of two trash cans. 


# 🌐 Website Features 💻
![Registration](https://github.com/asyf16/IntelliBin/assets/144833617/1bf42431-06a6-43a4-9668-d115c0ea5636)

User registration with MongoDB

![Login](https://github.com/asyf16/IntelliBin/assets/144833617/532673c8-0506-406e-86aa-1c27ae63c753)

User login with MongoDB

![User](https://github.com/asyf16/IntelliBin/assets/144833617/3aec997f-8f89-40c9-82c6-5d282057315f)

User profile, leaderboard, and avatar shop.

![Information](https://github.com/asyf16/IntelliBin/assets/144833617/afd22bbe-cffe-4412-95e4-19313ce49a97)

Informative section about what items are recyclable. 

# 🚧 Challenges we ran into ⛔
- Detecting and scanning the QR code using Python
- Building a container for our hardware
- Storing user data on Firestore
- Authenticating user accounts using Firestore
- Deploying our website with Netlify


# 🎉 Accomplishments that we're proud of 🏆
In a short span of 24 hours, we are proud to:
- Rebuilt our original hardware design with many added features
- Utilise OpenCV to conduct motion-sensing on our webcam
- Authenticate users and store user data on Firestore
- Update user statistics live every time a user recycles an object


# 🧠 What we learned 🤓
- How to use Firestore to store user data
- Authentication states in Firestore
- Updating document values in Firestore
- Generating QR codes with custom-encoded values


# 🌳 Importance of Recycling 🍀
- Conserves natural resources by reusing materials
- Requires less energy compared to using virgin materials, decreasing greenhouse gas emissions
- Reduces the amount of waste sent to landfills,
- Decreasesdisruption to ecosystems and habitats


# 👍How Intellibin helps 👌
**Efficient Sorting:** Intellibin utilizes AI technology to efficiently sort recyclables from non-recyclables. This ensures that the right materials go to the appropriate recycling streams.

**Increased Recycling Rates:** With Intellibin making recycling more user-friendly and efficient, it has the potential to increase recycling rates. 

**User Convenience:** By automating the sorting process, Intellibin eliminates the need for users to spend time sorting their waste manually. This convenience encourages more people to participate in recycling efforts. 

**In summary:** Recycling is crucial for environmental sustainability, and Intellibin contributes by making the recycling process more accessible, convenient, and effective through AI-powered sorting technology.

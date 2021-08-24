import SunnySide from "./SunnySide/SunnySide";

import emilyImg from "./SunnySide/assets/images/image-emily.jpg";
import thomasImg from "./SunnySide/assets/images/image-thomas.jpg";
import jennieImg from "./SunnySide/assets/images/image-jennie.jpg";

const testimonials = [
  { id: 1, userImg: emilyImg, userTestimonial: "We put trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit. ", userName: "Emely R.", userOcupation: "Markting Director" },
  { id: 2, userImg: thomasImg, userTestimonial: "SunnySide's enthusiasm coupled with their keen interest in our brand's success made it a setisfysing and enjoyable expirience.", userName: "Thomas S.", userOcupation: "Chief Operating Officer" },
  { id: 3, userImg: jennieImg, userTestimonial: "Incredibly end Result! Our sales increased over 400% when worked with Sunnyside. Highly recommended!", userName: "Jennie F.", userOcupation: "Business Owner" },
];

function App() {
  return <SunnySide testimonials={testimonials} />;
}

export default App;

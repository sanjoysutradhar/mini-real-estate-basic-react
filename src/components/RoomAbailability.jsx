import RoomList from "./RoomList";
import SectionHeader from "./SectionHeader";

export default function RoomAbailability() {
  return (
    <section>
      <div className="container">
        <SectionHeader
          name="Properties"
          title="Grab your Dream Property"
          details="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
        <RoomList />
      </div>
    </section>
  );
}

import RoomItem from "./RoomItem";

const roomList = [
  {
    id: 1,
    title: "Modern Design villa",
    bed_room: 3,
    bath_room: 2,
    image:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3000,
  },
  {
    id: 2,
    title: "Small grey brick home",
    bed_room: 5,
    bath_room: 3,
    image:
      "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
    price: 4000,
  },
  {
    id: 3,
    title: "Duplex home",
    bed_room: 4,
    bath_room: 3,
    image:
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4500,
  },
  {
    id: 4,
    title: "Swimming pool side of the residential Ascot home",
    bed_room: 4,
    bath_room: 3,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4500,
  },
  {
    id: 5,
    title: "Duplex home NIKON CORPORATION",
    bed_room: 4,
    bath_room: 3,
    image:
      "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4500,
  },
  {
    id: 6,
    title: "Duplex home",
    bed_room: 4,
    bath_room: 3,
    image:
      "https://media.istockphoto.com/id/176874901/photo/modern-log-cabin.jpg?s=1024x1024&w=is&k=20&c=Oo5mdAdwmxDCo0RSTAZzGMF5agHkqlSGj-ce4Ohr5IU=",
    price: 4500,
  },
  {
    id: 7,
    title: "Duplex home",
    bed_room: 4,
    bath_room: 3,
    image:
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5600,
  },
  {
    id: 8,
    title: "Duplex home in country side",
    bed_room: 4,
    bath_room: 3,
    image:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5500,
  },
  {
    id: 9,
    title: "Royal Palace",
    bed_room: 4,
    bath_room: 3,
    image:
      "https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 10000,
  },
];

function RoomList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {roomList.map((item) => (
        <RoomItem
          key={item.id}
          title={item.title}
          bedRoom={item.bed_room}
          bathRoom={item.bath_room}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default RoomList;

import { useState } from 'react';
import Image from "next/image";

function BookNowModal({ isOpen, onClose, onSubmit, roomDetails, date, daysOfStay, user }) {
  
  const [name, setName] = useState(user?.name??"");
  const [email, setEmail] = useState(user?.email??"");
  const [phone, setPhone] = useState(user?.phoneNumber??"");
  const [selectedRoom, setSelectedRoom] = useState('1');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, email, phone, selectedRoom });
  };

  // Generate an array of room options from 1 to 30
  const roomOptions = Array.from({ length: 30 }, (_, index) => ({
    value: (index + 1).toString(),
    label: `${index + 1}`,
  }));

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75"/>
    <div className="modal-content bg-white p-6 rounded-lg shadow-md relative flex flex-col md:flex-row">
      {/* Image and Info */}
      <div className="md:flex md:flex-col md:mr-4 justify-between">
        {roomDetails && roomDetails.images[0] && <Image src={roomDetails.images[0].url} alt="Room" style={{ height: '200px' }} className={`rounded-md ${roomDetails.images[0] ? 'hidden md:block' : 'hidden'}`} />}
        <div className="mt-4">
        
          <p className="text-lg font-semibold">Stay Details</p>
          
          <p>Check-in: {date[0].startDate.toString().split('00:00:00')[0]}</p>
          <p>Check-out: {date[0].endDate.toString().split('00:00:00')[0]}</p>
          <p className='md:block hidden' >Days of Stay: {daysOfStay}</p>
          <p>Price: ${roomDetails.pricePerNight*selectedRoom} per night</p>
          <p className="text-lg font-semibold">Total: ${roomDetails.pricePerNight*selectedRoom*daysOfStay}</p>
        </div>
      </div>
      {/* Form */}
      <form className="space-y-4 md:flex-1 mt-4 md:mt-0" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4">Book Now</h2>
        <div>
            <label htmlFor="room" className="block font-medium">Num. of Rooms</label>
            <select
              id="room"
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            >
              
              {roomOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        
          <div>
            <label htmlFor="name" className="block font-medium">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-medium">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2">Book Now</button>
        </form>
        {/* Image and Info */}
       
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default BookNowModal;

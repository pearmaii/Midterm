import React, { useState } from 'react';

const MyPetForm: React.FC = () => {
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Pet Name:', petName);
        console.log('Pet Type:', petType);
    };

    return (
        <div>
            <h2>My Pet Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="petName">Pet Name:</label>
                    <input
                        type="text"
                        id="petName"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="petType">Pet Type:</label>
                    <input
                        type="text"
                        id="petType"
                        value={petType}
                        onChange={(e) => setPetType(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default MyPetForm;

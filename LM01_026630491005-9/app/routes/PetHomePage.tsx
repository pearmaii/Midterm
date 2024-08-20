import React from 'react';

const PetHomePage: React.FC = () => {
    const studentInfo = {
        name: 'John Doe',
        studentId: '123456',
        email: 'john.doe@example.com',
        contact: '+1234567890'
    };

    return (
        <div>
            <h2>Pet Home Page</h2>
            <p><strong>ชื่อ-สกุล:</strong> {studentInfo.name}</p>
            <p><strong>รหัสนักศึกษา:</strong> {studentInfo.studentId}</p>
            <p><strong>อีเมล:</strong> {studentInfo.email}</p>
            <p><strong>ช่องทางติดต่ออื่น ๆ:</strong> {studentInfo.contact}</p>
        </div>
    );
};

export default PetHomePage;

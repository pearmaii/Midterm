import React from 'react';

const PetHomePage: React.FC = () => {
    const studentInfo = {
        name: 'John Doe',
        studentId: '123456',
        email: 'john.doe@example.com',
        contact: '+1234567890',
        imageUrl: 'https://th.bing.com/th/id/OIP.5FTenxt-3il9nwxzvDIYzgHaE7?rs=1&pid=ImgDetMain' // URL ของรูปภาพตัวอย่าง
    };

    return (
        <div className="text-center p-4">
            <h2 className="text-2xl font-bold mb-4">Pet Home Page</h2>
            <p><strong>ชื่อ-สกุล:</strong> {studentInfo.name}</p>
            <p><strong>รหัสนักศึกษา:</strong> {studentInfo.studentId}</p>
            <p><strong>อีเมล:</strong> {studentInfo.email}</p>
            <p><strong>ช่องทางติดต่ออื่น ๆ:</strong> {studentInfo.contact}</p>
            <div className="mt-4">
                <img
                    src={studentInfo.imageUrl}
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto"
                />
            </div>
        </div>
    );
};

export default PetHomePage;

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Container from '../atoms/Container';
import Like from '../molecules/Like';

interface ProfileProps {
  profileImage: string;
  thumbnail: string;
  name: string;
  intro: string;
  totalLikesCounts: number;
}

function Profile() {
  const { provinceId } = useParams<{ provinceId: string }>();
  const [profileData, setProfileData] = useState<ProfileProps | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`https://port-0-dream-hackertone-lzqmsbqmec4d2284.sel4.cloudtype.app/api/province/${provinceId}`);
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchProfileData();
  }, [provinceId]);

  if (profileData === null) {
    return <div>Loading...</div>;
  }

  return (
    <Container direction="flex-col">
      <img src={profileData.profileImage} alt="thumbnail" className="h-[150px]" />
      <Container alignItems="items-center" classes="h-[90px] shadow-md">
        <img src={profileData.thumbnail} alt="thumbnail" className="ml-[38px] h-[60px] w-[60px] rounded-full border-[2px]" />
        <div className="ml-[20px]">
          <p className="text-[16px] text-black font-pretendard">
            {profileData.name}
          </p>
          <p className="text-[11px] text-darkGrey font-pretendard">
            {profileData.intro}
          </p>
          <div className="text-[9px] text-grey font-pretendard">
            총 조회수
            {profileData.totalLikesCounts * 2134}
            회
          </div>
        </div>
        <div className="ml-auto mr-[13px]">
          <Like LikeNum={profileData.totalLikesCounts} />
        </div>
      </Container>

    </Container>
  );
}

export default Profile;

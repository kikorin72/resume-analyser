import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import ScoreCircle from '~/components/ScoreCircle';
import { usePuterStore } from '~/lib/puter';


const ResumeCard = ({ resume }: { resume: Resume }) => {      //destructuring after adding resume to home, specifying resume is coming from the Resume
    const { fs } = usePuterStore();
    const [resumeURL, setResumeUrl] = useState('');
  
    const { id, companyName, jobTitle, feedback, imagePath } = resume;              // incase you don't want to use resume.id resume.jobTitle etc, do this
    useEffect( () => {
          const loadResume = async () => {
              const blob = await fs.read(imagePath);
              if(!blob) return;
              let url = URL.createObjectURL(blob);
              setResumeUrl(url);
          }
          loadResume();
      }, [imagePath]);
  
  return (
    <Link to={`/resume/${id}`} className='resume-card animate-in fade-in duration-1000'>
        <div className='resume-card-header'>
            <div className='flex flex-col gap-2'>
            {companyName && <h2 className='!text-black font-bold break-words'>{companyName}</h2>}
            {jobTitle && <h3 className='text-lg break-words text-gray-500'>{jobTitle}</h3>}
            {!companyName && !jobTitle && <h2 className='!text-black font-bold break-words'>Resume</h2>}
        </div>
        <div className='flex-shrink-0'>
            <ScoreCircle score={feedback.overallScore} />
        </div>
        </div>

        {resumeURL && (
            <div className='gradient-border animate-in fade-in duration-1000'>
            <div className='w-full h-full'>
                <img
                    src={resumeURL}
                    alt="resume"
                    className='w-full h-[350px] max-sm:h-[200px] object-cover object-top' 
                />
            </div>
        </div>
    )}
    </Link>
  )
}

export default ResumeCard
function setResumeUrl(url: string) {
    throw new Error('Function not implemented.');
}


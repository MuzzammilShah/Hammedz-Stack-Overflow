import React from 'react'

const ProfileBio = ({currentProfile}) => {
  return (
    <div>
        <div>
        {
            currentProfile.tags.length !== 0 ? (
                <>
                    <h4 style={{color:"#e6792b"}}>Tags watched</h4>
                    {
                        currentProfile.tags.map((tag) => (
                            <p style={{color:"white"}} key={tag}>{tag}</p>
                        ))
                    }
                </>
            ) : (
                <p style={{color:"white"}}>0 tags watched</p>
            )
        }
        </div>
        <div>
            {
                currentProfile.about ? (
                    <>
                        <h4 style={{color:"#e6792b"}} >About</h4>
                        <p style={{color:"white"}}>{currentProfile.about}</p>
                    </>
                ) : (
                    <p style={{color:"white"}}>No Bio Found</p>
                )
            }
        </div>
    </div>
  )
}

export default ProfileBio
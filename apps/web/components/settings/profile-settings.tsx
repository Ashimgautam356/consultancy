"use client"

import type React from "react"
import { useState, useRef, type ChangeEvent, useEffect } from "react"
import Image from "next/image"
import { Button } from "../ui/button"
import { Camera, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { headers } from "next/headers"


export function ProfileSettings() {
  const router = useRouter()

  const cloudName = "duc3vuruc"; 

 
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setImgUrl(e.target.value)

  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>)  => {
    const file = e.target.files?.[0]
    if( !file) return;

    const formData = new FormData()
    formData.append("file",file);
    formData.append("upload_preset","my_present");

    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,formData
          ).then(res=>{
            if(res.status==200){
              console.log(res.data)
              setImgUrl(res.data.url)
              setImgPublicId(res.data.public_id)
            }
          })
        }
      }
      reader.readAsDataURL(file)
    }
  }


  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [imgPublicId, setImgPublicId] = useState("")
  const [isLoading, setIsLoading] = useState(false)


  useEffect(()=>{
    setIsLoading(true)
    axios.get("http://localhost:3005/api/v1/getUserData",{withCredentials:true}).then(res=>{
      if(res.status==200){
        const {personalInfo, userInfo} = res.data; 

        setFirstName(personalInfo.firstName)
        setLastName(personalInfo.lastName)
        setEmail(userInfo.email)
        setPhone(personalInfo.phone)
        setAddress(personalInfo.address)
        setImgUrl(userInfo.imgUrl)
        
      }
    })
    setIsLoading(false)
  },[router])


  async function handleSubmit(){
    setIsLoading(true)
    try{
      axios.put("http://localhost:3005/api/v1/update-user",{
        firstName,
        lastName,
        phone,
        address,
        imgUrl,
        imgPublicId
      },{
        withCredentials:true
      }).then(res=>{
        if(res.status==200){
          setIsLoading(false)
          window.location.reload()
        }
      })

    }catch(err){
      console.log(err)
    }

    

  }
  return(
    <div>
      <h2 className="text-xl font-bold mb-6">Profile Information</h2>

        {/* Profile Image */}
        <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-start gap-6">
          <div className="relative">
            <div
              className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-black shadow-md cursor-pointer"
              onClick={handleImageClick}
            >
              {/* <Image src={imgUrl || "https://res.cloudinary.com/duc3vuruc/image/upload/v1744108282/ywc0wjfumgnhfuv9rce8.webp"}  alt="Profile" fill className="object-cover" /> */}
              
              <img src={imgUrl || "https://res.cloudinary.com/duc3vuruc/image/upload/v1744108282/ywc0wjfumgnhfuv9rce8.webp"} alt="" />
              <div className="absolute inset-0 bg-white bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Camera className="h-8 w-8 text-white" />
              </div>
            </div>
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Profile Photo</h3>
            <p className="text-gray-500 text-sm mb-4">
              Upload a clear photo of yourself. This helps instructors and peers recognize you.
            </p>
            <div className="flex gap-2">
              <Button type="button" variant="outline" size="sm" onClick={handleImageClick}>
                Upload New Photo
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
              >
                Remove
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" >First Name</label>
              <input id="firstName" name="firstName" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}  />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-2">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              disabled
            />
            <p className="text-xs text-gray-500">
              Your email address cannot be changed. Contact support if you need to update it.
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} />
          </div>

          <div className="space-y-2">
            <label htmlFor="address">Address</label>
            <input id="address" name="address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
          </div>

          <div className="flex justify-end">
            <Button onClick={handleSubmit} disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </div>
        </div>



    </div>
  )
}

import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { User } from '../types/interfaces'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'

interface ProfileProps {
  user: User
  // onUpdate: (updatedUser: Partial<User>) => Promise<void>
}

export const ProfileComponent: React.FC<ProfileProps> = ({
  user,
  // onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  // const [interest, setInterest] = useState('')

  // const handleAddInterest = () => {
  //   if (interest.trim()) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       interests: [...(prev.interests || []), interest.trim()],
  //     }))
  //     setInterest('')
  //   }
  // }

  // const handleRemoveInterest = (index: number) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     interests: prev.interests?.filter((_, i) => i !== index) || [],
  //   }))
  // }

  const userSchema = z.object({
    userName: z.string().min(3).max(30).optional(),
    email: z.string().email().optional(),
    password: z.string().min(8).max(100).optional(),
    bio: z.string().max(150).optional(),
    university: z.string().max(50).optional(),
    country: z.string().max(50).optional(),
    interests: z.array(z.string()).max(5).optional(),
  })

  const userProfileForm = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      userName: user.userName,
      email: user.email,
      bio: user.bio,
      university: user.university,
      country: user.country,
      interests: user.interests,
    },
  })

  function onSubmit(values: z.infer<typeof userSchema>) {
    values.interests = values.interests?.filter(Boolean)
    console.log('Form values:', values)
  }

  return (
    <div>
      <div>
        <div>
          <Avatar>
            <AvatarImage src={user.image} alt={user.userName} />
            <AvatarFallback>
              <span className="text-background dark:text-background">
                {/* Select first Letter in uppercase from username. If username has at least one space take the first letter of the last part aswell. Examples: Carl Powers --> CP, John doe mc Guiver --> JG */}
                {(() => {
                  const nameParts = user.userName.split(' ')
                  if (nameParts.length === 1) {
                    return nameParts[0].charAt(0).toUpperCase()
                  }
                  return (
                    nameParts[0].charAt(0).toUpperCase() +
                    nameParts[nameParts.length - 1].charAt(0).toUpperCase()
                  )
                })()}
              </span>
            </AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h2>{user.userName}</h2>
          {!isEditing && (
            <button type="button" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          )}
        </div>
      </div>
      <Form {...userProfileForm}>
        <form onSubmit={userProfileForm.handleSubmit(onSubmit)}>
          <FormField
            control={userProfileForm.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={userProfileForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={userProfileForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={userProfileForm.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={userProfileForm.control}
            name="university"
            render={({ field }) => (
              <FormItem>
                <FormLabel>University</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={userProfileForm.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button type="submit">Save Changes</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      </Form>
    </div>
  )
}

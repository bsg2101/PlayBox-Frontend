"use client";

import { Content } from '@/types';
import { useState } from 'react';
import Image from 'next/image';

type ContentCardProps = {
    content: Content;
};

const ContentCard = ({ content }: ContentCardProps) => {
    const [isCommenting, setIsCommenting] = useState(false);
    const [comment, setComment] = useState('');
    const [isImageError, setIsImageError] = useState(false);

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Comment submission logic will be added here
        setComment('');
        setIsCommenting(false);
    };

    // Default image path
    const defaultImage = '/images/default-thumbnail.jpg';

    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            {/* Thumbnail Container */}
            <div className="relative w-full aspect-video bg-gray-100">
                <Image
                    src={isImageError ? defaultImage : content.imageUrl}
                    alt={content.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                    quality={75}
                    onError={() => setIsImageError(true)}
                />
            </div>

            {/* Content Container */}
            <div className="p-6">
                {/* Title and Description */}
                <div className="space-y-3 mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 line-clamp-2 hover:line-clamp-none transition-all duration-300">
                        {content.title}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base line-clamp-3 hover:line-clamp-none transition-all duration-300">
                        {content.description}
                    </p>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    {content.links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg 
                                     text-center transition-all duration-300 hover:-translate-y-0.5
                                     text-sm md:text-base font-medium truncate shadow-sm hover:shadow-md
                                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>

                {/* Comments Section */}
                <div className="border-t border-gray-200 pt-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Comments ({content.comments.length})
                        </h3>
                        <button
                            onClick={() => setIsCommenting(!isCommenting)}
                            className="text-blue-500 hover:text-blue-700 font-medium transition-colors 
                                     duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 
                                     focus:ring-offset-2 rounded-lg px-3 py-1"
                        >
                            {isCommenting ? 'Cancel' : 'Add Comment'}
                        </button>
                    </div>

                    {/* Comment Form */}
                    {isCommenting && (
                        <form onSubmit={handleCommentSubmit} className="mb-6 space-y-4">
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 
                                         focus:ring-blue-500 focus:border-transparent transition-all
                                         duration-300 resize-none min-h-[100px]"
                                placeholder="Write your comment..."
                                maxLength={500}
                            />
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">
                                    {500 - comment.length} characters remaining
                                </span>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg
                                             font-medium transition-all duration-300 shadow-sm hover:shadow-md
                                             focus:outline-none focus:ring-2 focus:ring-blue-500 
                                             focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={!comment.trim()}
                                >
                                    Post Comment
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Comments List */}
                    <div className="space-y-4">
                        {content.comments.map((comment) => (
                            <div
                                key={comment.id}
                                className="border-b border-gray-200 last:border-0 pb-4 hover:bg-gray-50 
                                         transition-colors duration-300 rounded-lg p-3"
                            >
                                <div className="flex justify-between items-start gap-4">
                                    <span className="font-semibold text-gray-800 truncate">
                                        {comment.userName}
                                    </span>
                                    <span className="text-sm text-gray-500 whitespace-nowrap">
                                        {new Date(comment.createdAt).toLocaleDateString()}
                                    </span>
                                </div>
                                <p className="text-gray-600 mt-2 text-sm md:text-base break-words">
                                    {comment.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;
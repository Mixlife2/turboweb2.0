import React from "react"


const TaskHistory: React.FC = () => {
    return (
                <div>
                    <h2 className="text-gray-700 font-bold mb-3">Tasks history</h2>
                        <div className="grid grid-cols-4 gap-4">
                        {Array.from({ length: 4 }, (_, i) => (
                            <div key={i} className="bg-gray-200 p-4 rounded">
                                <div className="text-sm mb-4">
                                    <div>Create a website on platform...</div>
                                        <div className="text-gray-600">
                                            <div>text text text text</div>
                                            <div>text text text text</div>
                                            <div>text text text text</div>
                                            <div>text text text text</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="bg-blue-500 text-white px-3 py-1 rounded">continue</button>
                                        <div className="text-gray-700 font-bold">200$</div>
                                    </div>
                            </div>
                     ))}
                        </div>
                </div>
         )}

         export default TaskHistory;    
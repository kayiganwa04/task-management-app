import React, { createContext, useContext, useState } from 'react';

// Define the context interface
interface AppContextInterface {
    count: number;
    increment: () => void;
    decrement: () => void;
}

// Create the context
const AppContext = createContext<AppContextInterface | undefined>(undefined);

// Create a context provider component
// export const AppProvider: React.FC = ({ children }) => {
//     const [user, setUser] = useState(null);



//     return (
//         <AppContext.Provider value={{ user }}>
//             {children}
//         </AppContext.Provider>
//     );
// };

// Custom hook to consume the context
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

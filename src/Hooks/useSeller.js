import { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admins/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isAdmin)
                    setAdminLoading(false)
                    // console.log(data);
                })
        }

    }, [email]);

    return [isSeller, adminLoading];
};

export default useSeller;
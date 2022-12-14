import { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [sellerLoading, setSellerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://bookbearer-server.vercel.app/users/sellers/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller)
                    setSellerLoading(false)
                    // console.log(data);
                })
        }

    }, [email]);

    return [isSeller, sellerLoading];
};

export default useSeller;
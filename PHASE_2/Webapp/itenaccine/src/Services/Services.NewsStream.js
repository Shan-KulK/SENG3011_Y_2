import { create } from 'apisauce';

const api = () => {
    const environment = localStorage.getItem('currentEnvironment');
    const subscription = localStorage.getItem('currentSubscription');
    return create({
        baseURL: servicePath,
        headers: {
            'X-SUBSCRIPTION': subscription,
            'X-ENVIRONMENT': environment,
        },
    });
};

const getNewsStream = (location,newsSource) => {
    
}
import Welcome from '@/components/pages/Welcome';
import KnacssDemo from '@/components/pages/KnacssDemo';
import ComponentsDemo from '@/components/pages/ComponentsDemo';
import VoicePage from '@/components/pages/VoicePage';
import CameraPage from '@/components/pages/CameraPage';
import MapsPage from '@/components/pages/MapsPage';
import FormPage from '@/components/pages/FormPage';
import WebRtcPage from '@/components/pages/WebRtcPage';


export default [

    {
        path: '/',
        label: 'Accueil',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/knacss-demo',
        label: 'Demo',
        name: 'KnacssDemo',
        component: KnacssDemo
    },
    {
        path: '/components-demo',
        label: 'Components',
        name: 'ComponentsDemo',
        component: ComponentsDemo
    },
    {
        path: '/voices-demo',
        label: 'Voice demo',
        name: 'VoicePage',
        component: VoicePage
    },
    {
        path: '/camera-demo',
        label: 'Camera demo',
        name: 'CameraPage',
        component: CameraPage
    },
    {
        path: '/maps-demo',
        label: 'Maps demo',
        name: 'MapsPage',
        component: MapsPage
    },

    {
        path: '/forms',
        label: 'Forms demo',
        name: 'FormsPage',
        component: FormPage
    },{
        path: '/webrtc',
        label: 'webrtc demo',
        name: 'WebRtcPage',
        component: WebRtcPage
    },
];

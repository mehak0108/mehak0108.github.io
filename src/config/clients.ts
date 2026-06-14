// Clients & stakeholder logos shown at the bottom of the Experience section.
// - Use local files: drop the image into public/logos/ and set src to '/logos/filename.png'
// - Or use an external URL (less reliable — can break if the source goes down)
// - Greyscale by default, color on hover

export interface Client {
  name: string;
  src: string;
  width?: number;   // optional: control display width (default 80px)
}

export const clients: Client[] = [
  {
    name: 'Microsoft',
    src: '/logos/microsoft.png',
    width: 100,
  },
  {
    name: 'JP Morgan',
    src: '/logos/jpmc.png',
    width: 100,
  },
  {
    name: 'Walmart',
    src: '/logos/walmart.png',
    width: 100,
  },
  {
    name: 'Carter\'s',
    src: '/logos/carters.png',
    width: 100,
  },
  {
    name: 'MLSE',
    src: '/logos/mlse.png',
    width: 100,
  },
  {
    name: 'Dubai Duty Free',
    src: '/logos/ddf.png',
    width: 100,
  },
  {
    name: 'Event Network',
    src: '/logos/event-network.jpeg',
    width: 100,
  },
  {
    name: 'Flying Tiger',
    src: '/logos/ftc.jpeg',
    width: 100,
  },
  {
    name: 'Grandiose Supermarket',
    src: '/logos/grandiose.png',
    width: 100,
  },
  // Add more clients below:
  // { name: 'Client Name', src: '/logos/client.png', width: 90 },
];

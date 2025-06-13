import React from 'react';
import p33 from '../../assets/knowledgehub/p33.jpg'
import p34 from '../../assets/knowledgehub/p34.jpg'
import p35 from '../../assets/knowledgehub/p35.jpg'
import p36 from '../../assets/knowledgehub/p36.jpg'
import p37 from '../../assets/knowledgehub/p37.jpg'
import p38 from '../../assets/knowledgehub/p38.jpg'
import p39 from '../../assets/knowledgehub/p39.jpg'
import p10 from '../../assets/knowledgehub/p10.jpg'
import p11 from '../../assets/knowledgehub/p11.jpg'
import p12 from '../../assets/knowledgehub/p12.jpg'
import p13 from '../../assets/knowledgehub/p13.jpg'
const SheetMetalGuide3 = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Sheet metal general design considerations:
        </h1>
      </div>

      {/* Wall Thickness Section */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Wall thickness</h2>
            <p className="text-gray-700 mb-4">
              As sheet metal parts are fabricated from one sheet of metal, the part must maintain uniform wall thickness throughout.
            </p>
            <p className="text-gray-700">
              We recommend a sheet metal thickness range between 0.5-10 mm (0.02-0.394 in) for laser cutting and 0.5-6 mm (0.02-0.236 in) for bending.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-60 bg-gray-200 rounded-lg flex items-center justify-center relative">
              <img src={p33} />
            </div>
          </div>
        </div>
      </div>

      {/* Tolerances Section */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tolerances</h2>
            <p className="text-gray-700 mb-4">
              Sheet metal fabrication tolerances are often slightly larger compared to CNC machining tolerances, as bends in the material can cause the material to stretch. It's important to note that the more processes a part undergoes, for instance if a part has multiple bends, the more difficult it becomes to achieve tight tolerances.
            </p>
            <p className="text-gray-700 mb-4">
              We offer the tolerances displayed on the right, which are generally acceptable in the industry. Although higher tolerances are achievable, extremely high tolerances can make a process more difficult and significantly drive up costs.
            </p>
          </div>
          <div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-2 font-semibold">Feature</th>
                    <th className="text-left py-2 font-semibold">Tolerance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">Cutting feature</td>
                    <td className="py-2">± .0078" (0.2mm)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">Bend angle</td>
                    <td className="py-2">± 1.0°</td>
                  </tr>
                  <tr>
                    <td className="py-2">Bend to edge</td>
                    <td className="py-2">± .0010" (0.254mm)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Design Best Practices for Laser Cutting */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Design best practices for laser cutting:
        </h2>

        {/* Add Fillets Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Add fillets to the corners to create a smooth finish
              </h3>
              <p className="text-gray-700">
                The corners of sheet metal parts can be extremely sharp, so it's recommended to add fillets, half the size of the material thickness, into your sheet metal design to avoid cuts from handling the part.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-60 bg-gray-200 rounded-lg flex items-center justify-center">
                <img src={p34} />
              </div>
            </div>
          </div>
        </div>

        {/* Consider the Kerf Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Consider the kerf</h3>
              <p className="text-gray-700 mb-4">
                A small amount of material is removed during the laser cutting process, which is called a cutting kerf. Compared to waterjet cutting or plasma cutting, laser cutting produces the lowest kerf at 0.3 mm on average, but the exact amount is dependent on the material and laser beam width.
              </p>
              <p className="text-gray-700">
                This is particularly important to remember if parts you are designing need to fit into one another when assembled. The rule of thumb is to add half of the kerf to the inner object and subtract the other half of the kerf from the outer part.
              </p>
            </div>
            <div className="space-y-4">
              <div className=" h-[300px] flex justify-center space-x-8">
                
                <img src={p35} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hole Specifications */}
      <div className="mb-16">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Specify hole diameters larger than the sheet thickness
          </h3>
          <p className="text-gray-700 mb-4">
            Holes with a diameter less than the thickness can lead to deformation or may be inaccurate due to the kerf or distortion caused by the laser beam. It is possible to laser cut holes with a diameter smaller than the material thickness, but if you want to stay on the safe side stick to a diameter the same size or greater that the sheet thickness.
          </p>
        </div>

        <div className="space-y-12 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-4">Space holes at least 2 times the sheet thickness apart</h4>
              <p className="text-gray-700 mb-4">
                Holes that are too close to each other can lead to deformation or breakage during forming or bending.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-60 bg-gray-200 rounded-lg flex items-center justify-center">
                <img src={p36} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-4">Holes should be at least the sheet's thickness from the edge</h4>
              <p className="text-gray-700 mb-4">
                If holes are placed too close to the edge, the possibility of the hole tearing or deforming is higher, especially if the part is to undergo bending operations.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-60 bg-gray-200 rounded-lg flex items-center justify-center">
                <img src={p37} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-4">Ensure holes are at least 2 times the sheet thickness from the start of the bend radius</h4>
              <p className="text-gray-700 mb-4">
                If the hole is placed too close to the bend, the hole may become distorted or may act as an unintended relief cut.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-60 bg-gray-200 rounded-lg flex items-center justify-center">
                <img src={p38} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Best Practices for Bending */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Design best practices for bending:
        </h2>

        {/* K-factor Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Consider K-factor to avoid deformation and tearing
              </h3>
              <p className="text-gray-700 mb-4">
                When bending metal, the material stretches, which consequently shifts the neutral axis away from the center. In order to design a flat pattern correctly and find the right bend allowance, you can find the neutral axis along the bend by calculating the K-factor.
              </p>
              <p className="text-gray-700 mb-4">
                K-factor is a constant that shows the ratio of the neutral axis to the material thickness:
              </p>
              <p className="text-lg font-mono text-center bg-gray-100 p-4 rounded">
                K-factor = t/Mt
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-60 bg-gray-200 rounded-lg flex items-center justify-center">
                <img src={p39} />
              </div>
            </div>
          </div>
        </div>

        {/* K-factor Table */}
        <div className="mb-12">
          <p className="text-gray-700 mb-4">
            K-factor changes based on material, thickness, bend radius, bending method (i.e. air bending vs bottom bending vs coining). Because of all these specific variables it's hard to calculate K-factor completely accurately, but it should range between 0.3-0.5 mm and the average is 0.4468 mm which is used for most bending applications.
          </p>
          <p className="text-gray-700 mb-6">As a guideline, you can use the values in the chart below:</p>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Generic K-factors</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Soft materials<br/>(e.g. aluminium)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Medium materials<br/>(e.g. steel)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Hard materials<br/>(e.g. stainless steel)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold" colSpan="4">Air bending</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">0 - Mt.</td>
                  <td className="border border-gray-300 px-4 py-2">0.33</td>
                  <td className="border border-gray-300 px-4 py-2">0.38</td>
                  <td className="border border-gray-300 px-4 py-2">0.40</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Mt. - 3x Mt.</td>
                  <td className="border border-gray-300 px-4 py-2">0.40</td>
                  <td className="border border-gray-300 px-4 py-2">0.43</td>
                  <td className="border border-gray-300 px-4 py-2">0.45</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">&gt; 3x Mt.</td>
                  <td className="border border-gray-300 px-4 py-2">0.50</td>
                  <td className="border border-gray-300 px-4 py-2">0.50</td>
                  <td className="border border-gray-300 px-4 py-2">0.50</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold" colSpan="4">Bottoming</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">0 - Mt.</td>
                  <td className="border border-gray-300 px-4 py-2">0.42</td>
                  <td className="border border-gray-300 px-4 py-2">0.44</td>
                  <td className="border border-gray-300 px-4 py-2">0.46</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Mt. - 3x Mt.</td>
                  <td className="border border-gray-300 px-4 py-2">0.46</td>
                  <td className="border border-gray-300 px-4 py-2">0.47</td>
                  <td className="border border-gray-300 px-4 py-2">0.48</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">&gt; 3x Mt.</td>
                  <td className="border border-gray-300 px-4 py-2">0.50</td>
                  <td className="border border-gray-300 px-4 py-2">0.50</td>
                  <td className="border border-gray-300 px-4 py-2">0.50</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold" colSpan="4">Coining</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">0 - Mt.</td>
                  <td className="border border-gray-300 px-4 py-2">0.38</td>
                  <td className="border border-gray-300 px-4 py-2">0.41</td>
                  <td className="border border-gray-300 px-4 py-2">0.44</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Mt. - 3x Mt.</td>
                  <td className="border border-gray-300 px-4 py-2">0.44</td>
                  <td className="border border-gray-300 px-4 py-2">0.46</td>
                  <td className="border border-gray-300 px-4 py-2">0.47</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">&gt; 3x Mt.</td>
                  <td className="border border-gray-300 px-4 py-2">0.50</td>
                  <td className="border border-gray-300 px-4 py-2">0.50</td>
                  <td className="border border-gray-300 px-4 py-2">0.50</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-700 mt-4">
            If you want to use a more exact K-factor, rather than use this chart, you'll need around 3-5 test pieces to gather some information, including bend allowance (BA), bend radius (Ir) and material thickness (Mt). More detailed information on{' '}
            <span className="text-orange-500 underline">calculating the K-factor can be found in this article</span>.
          </p>
        </div>

        {/* Bend Radius Section */}
        <div className="mb-12">
          <div className="bg-blue-100 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Keep the interior bend radii at least as large as the material thickness
            </h3>
            <p className="text-gray-700">
              When bending sheet metal, it's impossible to create a completely sharp corner. There will always be a slight curve which is called a bend radius.
            </p>
            <p className="text-gray-700 mt-4">
              In order to avoid distortion around the bend, parts should be designed with the interior bend radius to be the same size or greater than the material thickness.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-60 bg-gray-200 rounded-lg flex items-center justify-center">
             <img src={p10} />
            </div>
          </div>
        </div>

        {/* Consistent Bend Orientations */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Use the same radii with consistent bend orientations to reduce costs
              </h3>
              <p className="text-gray-700 mb-4">
                Inconsistent bend orientations and varying bend radii mean the part will be need to be reoriented more often, which requires more time from the machinist.
              </p>
              <p className="text-gray-700">
                Keeping the radii and bend orientation consistent will reduce the amount of part reorientations, and consequently save time and costs.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-48 h-16 bg-gray-200 rounded flex items-center justify-center mb-2">
                  <img src={p11} />
                </div>
                
              </div>
              
            </div>
          </div>
        </div>

        {/* Bend Reliefs Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Add bend reliefs to prevent tearing and reduce springback
              </h3>
              <p className="text-gray-700 mb-4">
                When there's material on either side of the bend, stress can build up in these areas, causing the material to deform or tear. Relief cuts or bend reliefs can relieve this stress, as well as adding stiffness and reducing the amount the sheet metal naturally springs back once bent.
              </p>
              <p className="text-gray-700">
                To add a relief cut to your design, add an incision either side of the bend that is at least the same width or greater than the material thickness.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-60 bg-gray-200 rounded-lg flex items-center justify-center">
               <img src={p12} />
              </div>
            </div>
          </div>
        </div>

        {/* Bend Height Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Ensure the bend height is at least double the material thickness plus the bend radius
              </h3>
              <p className="text-gray-700">
                Small bend heights are more difficult to form and position in the press brake, which can result in deformation.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-60 bg-gray-200 rounded-lg flex items-center justify-center">
                    <img src={p13} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheetMetalGuide3;
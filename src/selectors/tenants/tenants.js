import moment from 'moment';

function checkAddressAndType(tenant, address, typeTenant){
  console.log('ADDRESS!!!', address)
  console.log('Type Tenant!!!', typeTenant)
  let addressOK = false
  let typeOK = false
  if( !address || tenant.address === address ){
    addressOK = true
  }
  let testType = 'Active'
  if(tenant.startDate<tenant.endDate){
    testType = 'InActive'
  }
  if( testType === typeTenant || typeTenant === 'All'){
    typeOK = true
  }
  console.log('Add OK', addressOK)
  console.log('Type OK', typeOK)
  return addressOK && typeOK
}


export default (tenants, { name, address, typeTenant }) => {
  console.log('TeeNenets', tenants)

  return tenants.filter((tenant) => {
    const addressMatch = address
    const typeMatch = typeTenant
    const nameMatch = tenant.name.toLowerCase().includes(name.toLowerCase());
    console.log('Name OK', nameMatch)

    return nameMatch && checkAddressAndType(tenant, address, typeTenant)
  }
  );
};
